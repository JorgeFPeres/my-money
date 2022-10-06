import { createContext, ReactNode, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const res = await fetch('http://localhost:3000/transactions')
    const data = await res.json()
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])
  console.log(transactions)
  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
