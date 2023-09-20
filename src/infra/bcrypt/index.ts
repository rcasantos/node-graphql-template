import type { Hasher } from '../../protocols'

import bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher {
  constructor (private readonly salt = 10) {}

  async hash (plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

  async compare (plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest)
  }
}
