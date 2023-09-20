import amqb from 'amqplib';

export default class Amqp {
  static connect = async () => {
    const conn = await amqb.connect('amqp://localhost');
    const channel = await conn.createChannel();
    console.log('Amqp connected');
    return channel;
  };
  static send = async ({ queue, data }: { queue: string; data: any }) => {
    const channel = await this.connect();
    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
  };
  static receive = async ({ queue }: { queue: string }) => {
    const channel = await this.connect();
    await channel.assertQueue(queue);
    let data: any;
    channel.consume(queue, (msg) => {
      if (msg === null) {
        return console.log("Can't Found.!!!");
      }
      data = JSON.parse(msg.content.toString());
    });
    console.log(data, 'it comes in');
  };
}
