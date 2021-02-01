import React, { Component } from 'react'
import style from './DataBinding.module.css';


//class component
export default class DataBinding extends Component {
    render() { // phuong thuc

        let title = "hello cyber";
        let sanPham = {
            ten:'íPhone',
            gia: 1000,
            hinhAnh: 'https://picsum.photos/200/200'
        }

        renderSinhVien = () => {
            //Binding phương thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ
            return <div>
                id: {this.SinhVien.id} - ten: {this.SinhVien.ten}
            </div>
        }

        return (
            <div>
                {this.renderSinhVien()}
                <h1 className={`text-center ${style.textGreen} ${style['txt-light']}`}>Họ và tên: {this.sinhVien.ten}</h1>
                
                <p style={{backgroundColor:'red',color:'white'}}>abc</p>

                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt />
                    <div className="card-body">
                    <h4 className="card-title">{sanPham.ten}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                    </div>
                </div>
            </div>

        )
    }
}
