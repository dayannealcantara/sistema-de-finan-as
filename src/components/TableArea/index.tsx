import * as S from './TableArea'
import {Item} from '../../types/Item'
import TableItem from '../TableItem'


type TableProps = {
  list: Item[]
}

 const TableArea = ({list}: TableProps) => {
  return(
    <S.Table>
      <thead>
        <tr>
          <S.TableHeadColumn width={100}>Data</S.TableHeadColumn>
          <S.TableHeadColumn width={130}>Categoria</S.TableHeadColumn>
          <S.TableHeadColumn>Titulo</S.TableHeadColumn>
          <S.TableHeadColumn width={150}>Valor</S.TableHeadColumn>        
        </tr>
      </thead>
    <tbody>
      {list.map((item, index) =>(
        <TableItem key={index} item={item}/>
      ))}
    </tbody>
    </S.Table>
  )
}

export default TableArea