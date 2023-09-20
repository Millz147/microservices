import bcrypt from 'bcrypt';

export default class Cipher {
  private static saltRounds = 10;
  static encrypt = async (value: string) => {
    return await bcrypt.hash(value, this.saltRounds);
  };

  static decrypt = async ({ value, hash }: { value: string; hash: string }) => {
    return await bcrypt.compare(value, hash);
  };
}
