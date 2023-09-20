import jwt, { type JwtPayload, type SignOptions, type VerifyOptions } from 'jsonwebtoken'
import type { Decrypter, Encrypter, EncrypterCustomOptions, DecrypterCustomOptions } from '../../protocols'
import { throwError } from '../../helpers'

export class JwtAdapter implements Encrypter, Decrypter, EncrypterCustomOptions, DecrypterCustomOptions {
  constructor (
    private readonly publicKey = process.env.JWT_PUBLIC_KEY as string,
    private readonly privateKey = process.env.JWT_PRIVATE_KEY as string
  ) {}

  async encrypt (data: any, expiresIn?: string): Promise<string> {
    return jwt.sign(data, this.privateKey, { expiresIn: expiresIn ?? '24h' })
  }

  async decrypt (token: string): Promise<any> {
    try {
      return jwt.verify(token, this.publicKey)
    } catch (error) {
      throwError('Invalid token', 'BAD_REQUEST')
    }
  }

  async encryptCustomOptions (data: any, options: SignOptions): Promise<string> {
    return jwt.sign(data, this.privateKey, options)
  }

  async decryptCustomOptions (token: string, options: VerifyOptions): Promise<string | JwtPayload | undefined> {
    try {
      return jwt.verify(token, this.publicKey, options)
    } catch (error) {
      throwError('Expired token', 'BAD_REQUEST')
    }
  }
}
