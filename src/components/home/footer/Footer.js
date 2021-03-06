import React from "react";
import { Row, ColumnOne } from "../../shared/primitives/Primitives";
import { Icon } from "antd";

const footerStyle = {
    width: "100%",
    height: "200px",
    background: "#292F35",
    position: "relative",
    textAlign: "center",
    overflow: "hidden"
};

const iconStyle = {
    color: "white",
    fontSize: "32px"
};

const Footer = () => {
    return (
        <div style={footerStyle}>
            <Row>
                <div
                    style={{
                        width: "80%",
                        height: "auto",
                        marginTop: "50px",
                        marginLeft: "10%",
                    }}
                >
                    <ColumnOne width="25%">
                        <a href="https://www.facebook.com/SCUBarkada/">
                            <Icon type="facebook" style={iconStyle} />
                        </a>
                    </ColumnOne>
                    <ColumnOne width="25%">
                        <a href="https://twitter.com/SCUBarkada">
                            <Icon type="twitter" style={iconStyle} />
                        </a>
                    </ColumnOne>
                    <ColumnOne width="25%">
                        <a href="https://www.instagram.com/scubarkada/">
                            <Icon type="instagram" style={iconStyle} />
                        </a>
                    </ColumnOne>
                    <ColumnOne width="25%">
                        <a href="https://www.youtube.com/user/barkadaofscu">
                            <Icon type="youtube" style={iconStyle} />
                        </a>
                    </ColumnOne>
                </div>
            </Row>
            <Row>
                <div style={{ width: "100%", height: "auto", paddingTop: "25px" }}>
                    <p style={{ fontSize: "16px", color: "white" }}>
                        Designed by Ian Cho
                    </p>
                </div>
            </Row>
        </div>
    );
};

export default Footer;
