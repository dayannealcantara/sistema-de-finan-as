import { formatCuurentMonth } from '../../helpers/dataFilter';
import * as S from './InfoArea'
import ResumeItem from '../ResumeItem'

type InfoAreaProps = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number
}

 const InfoArea = ({currentMonth, onMonthChange,income,expense }: InfoAreaProps) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  const handleNextMonth = () =>{
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);    
  }
  return (
 <S.Container>
   <S.MonthArea>
     <S.MonthArrow onClick={handlePrevMonth}>⬅️</S.MonthArrow>
     <S.MonthTitle>{formatCuurentMonth(currentMonth)}</S.MonthTitle>
     <S.MonthArrow onClick={handleNextMonth}>➡️</S.MonthArrow>
   </S.MonthArea>
   <S.ResumeArea>
   <ResumeItem title="Receitas" value={income} />
  <ResumeItem title="Despesas" value={expense} />
      <ResumeItem title="Balanço" value={income - expense} color={(income-expense) < 0 ? 'red' : 'green'}/>
   </S.ResumeArea>
 </S.Container>
  )
}
export default InfoArea