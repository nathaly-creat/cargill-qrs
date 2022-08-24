// IMPORTACION HOOKS
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/not-found.jpg";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

// COMPONENTE PARA INDICAR DE PAGINA NO ENCONTRADA.
export const NotAccess = () => {
  const navigate = useNavigate();
  return (
    <div className="without-access">
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={notFound}
          // style={{
          //   height: 450,
          //   width: 550,
          // }}
          width="100%"
        />
        <CardBody className="without-access-body">
          <CardTitle tag="h5" className="without-access-p">
            Upps..! Página no encontrada.
          </CardTitle>
          <CardText className="without-access-p">
            Es posible que la página que solicita ya no esté disponible o que se
            haya movido a otra ubicación en el sitio.
          </CardText>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Volver
          </button>
        </CardBody>
      </Card>
    </div>
  );
};
