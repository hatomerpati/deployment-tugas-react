import React from 'react';
import { Button, Space, Card, Col, Row } from "antd";
import "./home.css";
import logo from "../../assets/images/react.svg"
import {
    ArrowRightOutlined
} from '@ant-design/icons';

const Home = () => {
    return (
        <div style={{
            margin: "0 30px"
        }}>
            <Row >
                <Col flex={4}></Col>
                <Col flex={3}>
                    <h1 >Your Innovative Bill <br></br>Payment Solution</h1>
                    <p>Alterra menyediakan berbagai pilihan layanan tagihan & pembayaran digital <br></br> yang dapat membantu bisnis Anda semakin berkembang.</p>
                    <Button style={{ backgroundColor: "Orange" }}>Get in touch</Button>
                </Col>
                <Col flex={5}>
                    <img src="https://www.alterra.id/wp-content/uploads/2020/01/CoverPotrait-400x480.png" srcset="https://www.alterra.id/wp-content/uploads/2020/01/CoverPotrait.png 2x" class="full-width" alt="alterra"></img>
                </Col>

            </Row>
            <Row align="center">
            <Col flex={4} ></Col>
            <Col flex={3}>
            <img src="https://www.alterra.id/wp-content/uploads/2020/01/CoverPotrait-400x480.png" srcset="https://www.alterra.id/wp-content/uploads/2020/01/CoverPotrait.png 2x"  alt="alterra"></img>
            </Col>
            <Col flex={5} align="justify">
            <div
            style={
                {
                    marginTop: "100px"
                }
            }
            ><h3>What We Do</h3>
            <p style={{fontSize: "16px", color: "gray", 
            }}>
            Alterra Indonesia telah berdiri sejak tahun 2015 dengan nama awal 
            Sepulsa.com. <br></br> Sebagai perusahaan teknologi terkemuka di Indonesia yang berfokus pada ekosistem billing dan teknologi pembayaran,<br></br> Alterra Indonesia kini telah terhubung ke berbagai penerbit tagihan (Bill Issuers) dan metode pembayaran <br></br> yang populer di Indonesia. Melalui sebuah innovative platform Alterra Indonesia menyediakan layanan yang dapat 
            <br></br>menghubungkan semua penerbit tagihan 
            (Bill Issuers), Digital Commerce, dan juga End-User.
            </p></div>
            
            </Col>

            </Row>
            <Row align="center"><h3>Trusted by Indonesia’s Top Tech Companies</h3></Row>
            <Row align="center">
            <Col flex={2}></Col>
             <Col flex={4} className="Hato">
                <ul>
                    <li>
                       <div >01</div>
                       <div>
                        <h3>E-Commerce & Digital Commerce</h3>
                        <p>Alterra Indonesia telah bermitra dengan lebih dari 200e-commerce & digital <br></br>commerce ternama di Indonesia, 
                            danampu memproses<br></br> hingga puluhan juta transaksi setiap harinya.</p>
                       </div>
                    </li>
                    <li>
                       <div >02</div>
                       <div>
                        <h3>E-Commerce & Digital Commerce</h3>
                        <p>Alterra Indonesia telah bermitra dengan lebih dari 200e-commerce & digital <br></br>commerce ternama di Indonesia, 
                            danampu memproses<br></br> hingga puluhan juta transaksi setiap harinya.</p>
                       </div>
                    </li>
                </ul>
             </Col>
             <Col flex={6}>
                <div><img src="https://www.alterra.id/wp-content/themes/alterra-wp/assets/revamp/img/img_tech_companies.svg" class="full-width"/></div>
             </Col>
            </Row>

            
            <h3>Why Join Us?</h3>
            <Row className='card'>
                <Col span={6}>
                    <img src="https://www.alterra.id/wp-content/uploads/2020/02/icon1@2x.png" />
                    <p>Aggregator resmi dari berbagai telco provider populer di Indonesia.
                    </p>
                </Col>
                <Col span={6}>
                    <img src="https://www.alterra.id/wp-content/uploads/2020/02/icon2@2x.png" />
                    <p>Tersedia berbagai pilihan layanan tagihan dan pembayaran (bill payment) yang sesuai kebutuhan bisnis Anda.
                    </p>
                </Col>
                <Col span={6}>
                    <img src="https://www.alterra.id/wp-content/uploads/2020/02/icon3@2x.png" />
                    <p>
                        Mampu memproses
                        puluhan juta transaksi
                        setiap harinya.
                    </p>
                </Col>
                <Col span={6}>
                    <img src="https://www.alterra.id/wp-content/uploads/2020/02/icon4@2x.png" />
                    <p>
                        Telah bermitra dengan lebih dari 200
                        online partners dan jumlahnya terus bertambah.
                    </p>
                </Col>
            </Row>
            <h3>Our Products and Services</h3>
            <Row className='card2' gutter={25}>
                <Col span={6}>
                    <Card>
                        <img src="https://www.alterra.id/wp-content/uploads/2020/01/alterra-bills-01.png" width="77" />
                        <h5>Alterra Bills</h5>
                        <p>
                            Layanan yang dapat menghubungkan pemilik tagihan (Bill Issuer), dengan berbagai kanal pembayaran, digital commerce, dan juga end-users.
                        </p>
                        {<a href="https://alterrabills.id/" target="_blank">Learn More <ArrowRightOutlined /></a>}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <img src="https://www.alterra.id/wp-content/uploads/2020/02/academy.png" width="77" />
                        <h5>Alterra Academy</h5>
                        <p>
                            Tech talent incubator yang memberikan kesempatan bagi banyak individu untuk menjadi tech talent profesional dan berkualitas bahkan tanpa latar Pendidikan IT.
                        </p>
                        {<a href="https://academy.alterra.id/" target="_blank">Learn More <ArrowRightOutlined /></a>}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <img src="https://www.alterra.id/wp-content/uploads/2020/01/logo_alterra_pay@2x.png" width="77" />
                        <h5>Alterra Pay</h5>
                        <p>
                            Sistem pembayaran online dan rekonsiliasi otomatis yang terintegrasi untuk membantu bisnis Anda berjalan lebih efektif dan efisien.
                        </p>
                        {<a href="https://alterrapay.id/" target="_blank">Learn More <ArrowRightOutlined /></a>}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <img src="https://www.alterra.id/wp-content/uploads/2020/01/logo_bimasakti@2x.png" width="77" />
                        <h5>Bimasakti</h5>
                        <p>
                            Anak perusahaan Alterra yang melayani kebutuhan bisnis & organisasi seperti PDAM, pemerintah daerah, rumah sakit, dsb, melalui penyediaan teknologi yang dapat menunjang aktivitas operasional.
                        </p>
                        {<a href="https://bsa.id/" target="_blank">Learn More <ArrowRightOutlined /></a>}
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
