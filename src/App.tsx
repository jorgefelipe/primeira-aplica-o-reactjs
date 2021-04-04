import { GlobalStyle } from './styles/global';

import {Header} from './components/Header' 
import { Dashboard } from './components/Dashboard';

import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';


export function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  function handleOpenModal(){
      setIsShowModal(true);
  }

  function handleCloseModal(){
      setIsShowModal(false);
  }


  return (

    <TransactionsProvider>
      <GlobalStyle/>
      <Header onOpenNewTrasactionModal={handleOpenModal} />

      <NewTransactionModal isOpen={isShowModal} onRequestclose={handleCloseModal}/>

      <Dashboard/>
    </TransactionsProvider>
  );
}

