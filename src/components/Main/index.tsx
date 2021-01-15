import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS'
}) => (
  <S.Wrapper>
    <S.Logo src="/favicon.ico" alt="Imagem de logomarca"></S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/favicon.ico"
      alt="Imagem de logomarca"
    ></S.Illustration>
  </S.Wrapper>
)
export default Main
