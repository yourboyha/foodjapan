// const Menu = () => {
//   return <h1>menu</h1>;
// };

import { Container, Table } from "react-bootstrap";


function Menu() {
  const data =[
    
  ]

  return (
    <Container className='p-3 my-3' >
      <h1>เมนูอาหารญี่ปุ่น</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ชื่อเมนู</th>
            <th>ราคา (บาท)</th>
          </tr>

        </thead>
      </Table>


    </Container >
  )
}


export default Menu;