
// const Home = () => {
//   return (<></>);
// };
import { Button, Container, Row, Col } from "react-bootstrap";

function DataFoods() {
  const foods = [
    {
      id: 1,
      name: 'ข้าวหมูทอดทงคัตสึ',
      image: 'mootod.jpg',
      desc: 'เริ่มกันที่ เมนูอาหารญี่ปุ่น ยอดฮิตอย่าง ข้าวหมูทอดทงคัตสึ ข้าวหมูทอดสไตล์ญี่ปุ่น ที่จะทำให้คุณหลังรักการกินหมูทอด ด้วยสัมผัสที่กรอบนอกนุ่มใน อร่อยได้ในคำเดียว ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้ ซึ่งสูตรนี้ได้มาจาก เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า ถ้าทำขาย รสชาติอร่อย ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน',
      price: 120
    },
    {
      id: 2,
      name: 'ข้าวหมูทอดคัตสึด้ง',
      image: 'kattsu.jpg',
      desc: 'ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ ตรงที่ หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่ แล้วราดลงบนข้าวอีกทีหนึ่ง ทำให้เป็น เมนูอาหารญี่ปุ่น ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด ลื่นคอกำลังดี',
      price: 130
    },
    {
      id: 3,
      name: 'ข้าวแกงกะหรี่ญี่ปุ่น',
      image: 'kang.jpg',
      desc: 'อีกหนึ่งเมนู ข้าวหมูทอด สไตล์ เมนูอาหารญี่ปุ่น ที่อร่อยและเข้มข้นยิ่งขึ้น เมื่อได้แกงกะหรี่รสชาติเข้มข้นมาทานคู่กัน จะทำให้คุณได้เพลิดเพลิน กับทั้งรสชาติของแกงกะหรี่และหมูทอดในมื้อเดียว',
      price: 110
    }
  ]

  function Foodprops(props) {
    return (
      <>
        <div>
          <img src={props.image} alt={props.name}
            className="img-fluid rounded-circle"
            style={{ marginTop: '10px' }} />
        </div>
        <div>
          <h1>{props.name}</h1>
        </div>
        <div >
          <h3>{props.desc}</h3>
        </div>
      </>
    );
  }


  return (
    <Container className="p-3 my-3">
      <Row className="border">
        <Col className="text-justify">
          <Foodprops
            name={foods[0].name}
            image={foods[0].image}
            desc={foods[0].desc} />
          <div className="text-center">
            <div>
              <Button className="btn btn-secondary m-1">ดูวิธีทำ </Button>
            </div>
          </div>
        </Col>
        <Col className="text-justify">
          <Foodprops
            name={foods[1].name}
            image={foods[1].image}
            desc={foods[1].desc} />
          <div className="text-center">
            <div>
              <Button className="btn btn-secondary m-1">ดูวิธีทำ </Button>
            </div>
          </div>
        </Col>
        <Col className="text-justify">
          <Foodprops
            name={foods[2].name}
            image={foods[2].image}
            desc={foods[2].desc} />
          <div className="text-center">
            <div>
              <Button className="btn btn-secondary m-1">ดูวิธีทำ </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )

}



function Home() {
  return (
    <Container className='p-3 my-3' >
      <Container>
        <h1>วิธีทำอาหารญี่ปุ่นยอดฮิต</h1>
      </Container>
      <DataFoods />
    </Container>
  )
}


export default Home;

