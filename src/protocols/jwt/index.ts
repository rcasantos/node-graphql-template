import type { JwtPayload, SignOptions, VerifyOptions } from 'jsonwebtoken'

export interface Encrypter {
  encrypt: (data: any, expiresIn?: string) => Promise<string>
}

export interface Decrypter {
  decrypt: (token: string) => Promise<any>
}

export interface EncrypterCustomOptions {
  encryptCustomOptions: (data: any, options: SignOptions) => Promise<string>
}

export interface DecrypterCustomOptions {
  decryptCustomOptions: (token: string, options: VerifyOptions) => Promise<string | JwtPayload | undefined>
}
