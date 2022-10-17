import React, { useState } from 'react';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Modal from '@/components/Modal/Modal';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <form>
        <Input name="로그인" />
        <Input name="" />
        <Input name="" />
        <Input name="" />
        <Button onClick={modalHandler}>모달창 열기</Button>
      </form>
      {isOpen && (
        <Modal>
          <div>hello modal</div>
        </Modal>
      )}
    </>
  );
};

export default SignUp;
