import * as React from "react";
import "./LoginPage.scss";

const LoginPage = ({ logInConnect }) => (
    <div>
        <form className="form-signin">
            <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
                <p>Build form controls with floating labels via the</p>
            </div>

            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputEmail">Email address</label>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={logInConnect}>Sign in</button>
            <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
        </form>
    </div>
);

export default LoginPage;