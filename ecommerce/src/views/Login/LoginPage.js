import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login_container">
                <h1>Đăng nhập</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Mật khẩu</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className="login_signInButton">
                        ĐĂNG NHẬP
                    </button>


                </form>

                <p>
                    Bằng cách đăng nhập, bạn đồng ý với Điều kiện sử dụng và mua bán của <strong>SHOPDAZ</strong>. Vui lòng
                    xemm Thông báo về Quyền riêng tư của chúng tôi.
                    <strong>VÀ ĐỪNG SỬA SOURCE TUỲ TIỆN :D</strong>
                </p>

                <button className="login_registerButton">
                    Chưa có tài khoản? Tạo tài khoản.
                </button>
            </div>
        </div>
    )
}

export default LoginPage