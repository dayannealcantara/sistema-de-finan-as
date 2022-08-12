import * as S from './ResumeItem'

type ResumeProps = {
  title: string;
  value: number;
  color?: string;
}
 const ResumeItem = ({ title, value, color }: ResumeProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Info color={color}>R$ {value}</S.Info>
    </S.Container>
  )
}
export default ResumeItem