import * as S from './TableItem'
import { Item } from '../../types/Item'
import { formDate} from '../../helpers/dataFilter'
import {categories} from '../../data/categories'

type TableItemProps ={
  item: Item
}

const TableItem = ({item}: TableItemProps) => {
  return (
   <S.TableLine>
     <S.TableColumn>{formDate(item.date)}</S.TableColumn>
     <S.TableColumn >
       <S.Category color={categories[item.category].color}>
       {categories[item.category].title}
       </S.Category>      
     </S.TableColumn>
     <S.TableColumn>{item.title}</S.TableColumn>
            <S.TableColumn>
                <S.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </S.Value>
            </S.TableColumn>
   </S.TableLine>
  )
}
export default TableItem;