import styled from 'styled-components'

export const ToastContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: 2px var(--primary-color) solid;
`

export const ToastMessage = styled.p`
  margin: 0;
  text-align: center;
  font-size: var(--tittle3-Size);
  font-weight: var(--tittle3-Weight);
`