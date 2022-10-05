import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Close, Content, Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <Close>
          <X />
        </Close>
        <form action=''>
          <input type='text' placeholder='Descrição' required />
          <input type='number' placeholder='Preço' required />
          <input type='text' placeholder='Categoria' required />
          <button type='submit'>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
