import { BeneficiariesType, RemoteDataType, SwapOrderType } from '@core/types'

export enum CustodialSanctionsEnum {
  EU_5_SANCTION = 'EU_5_SANCTION',
  EU_8_SANCTION = 'EU_8_SANCTION'
}
export enum CustodialSanctionsErrorCodeEnum {
  EU_5_SANCTION_ERROR = 165
}

type NotificationItem = {
  message: string
  reason: string
  type: string
}

type NotEligibleReason = {
  message: string
  reason: string
  type: string
}

export type ProductEligibilityForUser = {
  buy: {
    canPlaceOrder: boolean
    enabled: boolean
    id: 'BUY'
    maxOrdersCap?: number
    maxOrdersLeft: number
    reasonNotEligible?: NotEligibleReason
  }
  custodialWallets: {
    canDepositCrypto: boolean
    canDepositFiat: boolean
    canWithdrawCrypto: boolean
    canWithdrawFiat: boolean
    enabled: boolean
    id: 'CUSTODIAL_WALLET'
  }
  depositCrypto?: {
    enabled: true
    id: 'DEPOSIT_CRYPTO'
  }
  depositFiat?: {
    enabled: false
    id: 'DEPOSIT_FIAT'
    reasonNotEligible?: NotEligibleReason
  }
  depositInterest?: {
    enabled: false
    id: 'DEPOSIT_INTEREST'
    reasonNotEligible?: NotEligibleReason
  }
  exchange: {
    canDepositCrypto: false
    canDepositFiat: false
    canTrade: false
    canWithdrawCrypto: false
    canWithdrawFiat: false
    enabled: false
    id: 'EXCHANGE'
    suggestedUpgrade: {
      requiredTier: number
    }
  }
  kycVerification: {
    enabled: false
    reasonNotEligible: {
      message: string
      reason: string
      type: string
    }
  }
  notifications: Array<NotificationItem> | []
  sell: {
    enabled: true
    id: 'SELL'
    maxOrdersCap?: number // optional (null if there's no max)
    maxOrdersLeft?: number // optional (null if there's no max)
    reasonNotEligible?: NotEligibleReason
  }
  swap: {
    canPlaceOrder: boolean
    enabled: boolean
    id: 'SWAP'
    maxOrdersCap?: number
    maxOrdersLeft: number
    reasonNotEligible?: NotEligibleReason
  }
  trade?: {
    enabled: false
    id: 'TRADE'
    reasonNotEligible?: NotEligibleReason
  }
  withdrawFiat?: {
    enabled: false
    id: 'WITHDRAW_FIAT'
    reasonNotEligible?: NotEligibleReason
  }
}

// State
export type CustodialState = {
  beneficiaries: RemoteDataType<string, BeneficiariesType>
  productEligibilityForUser: RemoteDataType<string, ProductEligibilityForUser>
  recentSwapTxs: RemoteDataType<string, SwapOrderType[]>
  userHadNotifications: boolean
}
