import { Link } from "react-router-dom";

export const Info = (props) => {

    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-bold text-lg">
                {props.title}
            </h3>
            <div className="flex flex-col gap-3 max-w-52">
              {props.info.map((inf, index) => (
                <div key={index}>
                    <Link to={inf.link} className={props.className}>
                        {inf.text}
                    </Link>
                </div>
              ))}

            </div >

        {/* <div ">
                <span>Sobre Drip Store</span>
                <span>Segurança</span>
                <span>Wishlist</span>
                <span>Blog</span>
                <span>Trabalhe Conosco</span>
                <span>Meus Pedidos</span>
            </div> */}

        </div>
    );
}

