// //import hweb from "../src/images/img7.png";
// import cweb from "../src/images/img8.png";
// import jweb from "../src/images/img9.jpg";
// import rweb from "../src/images/img6.png";
// import nweb from "../src/images/img4.jpg";
// import oweb from "../src/images/img10.png";
import React from "react";
import { NavLink } from "react-router-dom";

const Sdata = () => {
    return (
        <>
<div className="col-md-70 col-35 d-flex wt-200px">

            <div>
        <div className="card">
            <img src= "https://lorvencomputers.com/assets/img/course/2.png"
           className="card-img-top" alt= "html" />                    
            <div className="card-body">
                     <h5 className="card-title font-weight-bold">HTML</h5>
                        
            </div>
            </div>
            </div>

            <div>
            <div className="card">
            <img src= "https://miro.medium.com/max/1400/0*0Jt6AoXxmN0n0qhN"
           className="card-img-top" alt= "css" />                    
            <div className="card-body">
                     <h5 className="card-title font-weight-bold">CSS</h5>
            </div>
            </div>
            </div>

            <div>
        <div className="card ">
            <img src= "https://www.w3schools.com/whatis/img_js.png"
           className="card-img-top " alt= "js" />                    
            <div className="card-body">
                     <h5 className="card-title font-weight-bold">JAVASCRIPT</h5>
            </div>
            </div>
            </div>

            <div>
        <div className="card">
            <img src= "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
           className="card-img-top" alt= "react" />                    
            <div className="card-body">
                     <h5 className="card-title font-weight-bold">REACT</h5>
            </div>
            </div>
            </div>

            <div>
        <div className="card">
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDERuCiZh05ZsPM4g5NYi6jXxGF6KBtQVXd-1TQGKas_blWmeJchS8m9CcBCvJM4TR9gk&usqp=CAU"
           className="card-img-top" alt= "njs" />                    
            <div className="card-body">
                     <h5 className="card-title font-weight-bold">NODEJS</h5>
            </div>
            </div>
            </div>

            <div>
        <div className="card">
            <img src= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ8NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBomGxUVLT0hMSk3MTowFyAzOTosQygtMCsBCgoKDg0OFg8PFysdHR0rListKy0rLS0rKystKysrLSsrLS0tLS0rKy0rKysrLS0tLS0rLSs3LSstNzctLTErLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAABAgMABgUE/8QATBAAAgEDAgEGBwgQBAcAAAAAAAECAxESBAUhBhMxQVFhFCIyUnF0kSMlQlSBk7PRByQ0YmRlc5KUobLBw9Ph8BYzRLEVJjVDU3KC/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIREBAQEBAQEAAgIDAQAAAAAAABEBEgIhQWEyURMiMQP/2gAMAwEAAhEDEQA/AOcsGw1g2PpvOSwbDWDYBLBsNYNihLBsNiHEBLBsPibEiksaxTE2JSEsaxSxrAidg2KWNYETxNiUsawWJ4mxKWNYETxNiUsawInibEpY1gRPEFiljWCROwLFLGsCJ2NYpYGIISwLFMQWBCWNYfE1iCdjFLGCNY2I9g2KsJibEpYNiLE7BsPYOIhE7BsUxDiVYnY2JTEOIInibEpYNgROxsSmIcQsSsHEpibECeJrFMTYgTxNiVxBiBPE2JTE2IEsTWK2BYCdgYlbGsEiVjYlLGsCJYmsUsawIlY1imJsQROwLFLGsCJ2MPYII1g4lFE2IUmIcR7BsAiRsSmIcSETsGw+IcQsJY2JTENikTxNiUsGxFieIcR7BxBE8TYlLGsUieJsSmJsQRPE2JTE2IInYFithWiETaMl9bfQku0awODckvJpytN9U6q/7a7o9ffZdUkTdICXydl+Dt3mxHDYpE8QYlbGxCRLEGJWxrAiNjWK4gxFIlY1iuIMQRKximIQkHEOI9gqIahMQpD4hsCJ2NYdoRhYwUjYu17O3bbgaJKQyQcRoobEqxOwCjQjXUuJCFMPzU/Nl7GbmZ+bL2MlUgR1Rn5svzWHmZebL81ikIFDYO9rO/ZbibG3B8PSWkCxmh7GsKRJomy0kfHuGsjpqTrTTm8lCjSj5des/Jpx/voJvqfQNRVkpRo0mlXqxzy4PwfTp2lWa7eqK65dyZSKjFRhBWhBYxTbbt2tvpb632sTQ6KrThKVX3TU15KpqakYvHL4NKP3kFwXyvrLczPzZfmsz5/vSAmMbmp+bL81hVKfmy9jNUjBsMqMvNl7GM4NdKa9PAtITEGJVIOJUiOIMS2IMQRHE1iuJsSJEcTFbGBBUQ4lMQ4hqJ4mxKqIcRSPmkiUj6pxPnqIm6scZuNbVx3XWVNLOUlooQ1M9O5ywnRUaamlHo6JP5LtHW6TUwr0qdei70qsco36Yvrg+9O6PF2yTjvm5tdK00P4I1FR23V4cI7duE7w4eLpNZZeK+yL/wBreazzeN3Pv4R0lMrYnGLTs+DXBlrHprUSkjz94k1o9ZJNqUdLWcWnZpqPSmejNHnb39xa71Sv+yZ9780jwdm2KNfSaevU1m4qdaDnJQrpQTzkuF1fqPtXJmn8c3P9Ij9R9HJr/p2h/Iy+kmepFHLz487mJmPFXJen8d3P9Ij9Rv8AC1P47un6RH6j34xDia/x+V5fFpdvhToeDOderTeadSpU938Z3upLrXUeTyf1VXT6ie1aybnVjepotRJv3ek7vG749rXepLqR0TieXyi2jw2ilB4aqg+d0lRPFqa483fqTsuPU0n2j15n3PwR6Vw3PL2Dd/DaDnNYami+b1VJrFxqdGdupOz4dTTR6MXd2XSzWerlGk0lKU5KEIRc5zlwjCCV22eNtKlrK3/EqkXClBTpbbRl0xp9EtRJec/76Eye4y/4jqnt1N/ammcam41ovy5p+LQi/Svam/g8eiwXBRSjGKUYxirRjFKyil2JGP5b+sJXibhskNRVlWlqddScsfEo1lCmrRUeCt3frPmfJqn8c3P9Ij9R0bpk5QLvjycuI5U7a9HpoVqOr18pS1EaTVWveOLhKV1a3HxT2qnJenGTj4ZufB2+6I/UfL9kFW0FL12n9FUOqrx90n/7M554zrcSPAjyXpv/AFm5/pEfqPX23b1pqTpRqV6ydSVTPUTU6iuksb9ni/rZ9UIFlA7efOZ9xeUlEOJXEOJsiLiCxfEDiKRCwMS+IMRSI4mK4mBBUQ4lVEOJKsTUQuJRRC4irHyzifPUifbOJCcCaRyu3L373T1aH8E9nVaOnqKNTT1lenVVm10wl8Ga70zytrj7+7qvwaH8E6JUzl4+5qZjzOTmrqPnNDqvuzRJRcm7+EabhhWXbwa9q7z2rHkb7t9SSp6zSpeG6K8oK1/CNPxzoPt4N29LXWeloNZT1VClqaP+XVjdJ9MJfCg+9M152f66uf0eSPN31faWu9Ur/snqyR5u/L7R13qlf9kvrfmm4+XkxSb23QtJv3GXQn/5JnrQoy82XsZyfJ7k7zui0tXw7cKXOU5S5ujVxpw8eStFfJ+s9KPJX8Y7p89/U5+fWzPiZXQRoy81+xlFQl5r9jOfjyS/GW6/Pf1G/wAIfjLdfnv6muvX9L9/p7cqZGpGx9mFkldvGMY3fS7K133kKsTdWOU5Q0J6Wut200cnG0NfRXRVouy5z/a77VF9pTed8So0YbfJVtVr0lplFrKjBuznJfBkmmu5pvqPU3fcKej09TUVkpRScI0n0V5yTtT9D437rnF7Bp57TqdPqdZRhTo66lKEKicm9I5PhdPyXa10+OMn1po4etmzPyxvx2uybXDRaeGmg8mnnWqddWs+mXoXQu5HqQgThTs7M+unE7efmRvMSlTIzpn3SiRnEqxxf2Ro20FL12n9FUOtrw90l6Wct9kte99L12n9FUOwrR8eXpZz8/y1nM+6nCBVQGhEex1aiWJrDswpCWBYpY2IpEsQYlsTYhIjiYriYEHEZRKKIyiStxJRC4lVEOIpHySiRnE+2UCUoEpHH7TH3/3Zfg0P4J06pnO7NH/mHd1+DQ/gnWxpnPx/xjziEI2aa6UeBXits1nO+Tt241Eq/m6PWvoqd0Jdfy9iR1KpkNdo6delUoVo50asXCce7qa7GnZp9qNesrW+UakGm0+lHm7+vtHXeqV/2RdirVISqbbqZZanSQUqVV/6vRPhCou+PQ/32ZXlBH7Q1/qlf9kzvq4n/cfNyTj72aD8jL6WZ7MInlckI+9eg/Iy+lme3CBfO/MXznwYxHsNGIWjVaiUkQq2SlKclCEIuc5ydowgldyb7LH1OJx/KOvPctWtm0krUoNT3LUR4qEYv/Lv3O3DrlZdTM+vUZ9fHy7fTe76zw6rFrb9HJw0VKStz9W6bnJfIm//AJjxszodx2+Gro1NPXu4VeOS8qnUXk1F3p/vXWejQ0UKVOnRoxwpUoqFOC6ort7W+lvtY/Mkzz8+pnn+3KckdbUpVJ7RrLLU6Zfa078NRp0rqKfXaPFd3D4J1tNHg8rdgnqqUK+mvDcNG+c0848JVIp3dK/bfiu+66z7eSu9x3HTKsrRr07U9VSXDm6vnJdUZWbXyrqHnZ808/NmvVaJTifTiJKJutxxH2T1730fXaf0VQ7KrHx5ek5D7KkbbfR9ep/RVDtasfHl6TGfy1jM/wBtSigyHURNRONOLnUlCnBOKcpyUYptpJNvrba9putI87F1OZUlzvN87zfwubyxy9F+B8kN30sqiorU0XVc+bUbvF1PMU7YuXde4k44btLPxVHZ3nd44x8Kd3fq4X9h59VVtDt0VUho9y2mjCk1KDdKvzHOLGpbjCo02uKabOe+9Y3XRpDYjuPjPr4jqJ0rpEsQYl8QYlpEcQFsTCkMojKJTENjNaiaiHEoojYirHzuBN0z68Ac2Skcttey16e8bhrZxitPqaMYUpKcXJyXNdMeleSzpI0yyplIwM58TPMQVMnUpn24CzplqxzPKHa6laFOvprLXaOTq6Vu1qnDx6EvvZLh6fSyFaotx22vLTq0tTp61FU5vGVKvbGVKV+hp/ufWdNOkeFrqC0WolrYp+C6mUY7jBeTRqdENYl1LoUu5qXUzGufrzPrntq02+aXT0dNT0+2yhRi4xlUqtzacnLi1US6+w+xVt/+LbV85L+YdbzNnYeNIT9mf+f7ckq/KD4rtXzkv5gee5Q/Ftq+cl/MOwVIbmiz9rx+3NSlur0NT3HTR3GU5Qp8zUjGjSpOKtVvKTvLyrLtt8teSnJ6O36VU+E9RVaqaqt0udXzU+uKu/1vrOhVIpGkMz8rnj8vlVE3Mn2qmbmzVaj4OascvrOT+o0+5w3HbYwlCunHX6WU40lU48ZRvwu+nukr9bO1dMXmyblZ3zXzOn/b6QOmfXgBwLWo4/l9sVfX6OlR00YyqQ1MaslOcaawVOa6X3yR004Xk32s+h0w82T81nn7Xy4HyT2ug1qU6UGtW1LUqWUlWaioq6b4cF1W7T1MAOmVY8bQbVR0uboU3CU8c5zqVK05KPkxym27Ls6CFLk7o4yjKNBJRnzkaXO1np4VOnJUcsE/kPddMHNiYnOIqPWx1EqoBxLWolYDiWcQYikRxCUxMKQ2IyiOkMoma1E1EZRKJBSJSJ4BxK2CkKRJRGUSiQyQqxNRM4FlEOJKR8kqZOVFNNSSlGScZRkrxlFqzTXWrH3YAwFI8LbaD08vApZShGLloqkuLlQXTQlLrnDh6YtPjjI9SNEpqdKqscW3GUZKdOovKpVF5M19XWm0+DZTTSc14yUZxeNSKd1Gfc+tO6afY0Ss5k+JKkMqR9SiNiK1HyqkMqZ9GJsRSIYAxL4gxFIg4i4H04gxLSPnwBgXxBiKRBwBiXxBiKRHEDgWcRbFpEXAGBawLCpEcQYlmgNCkRcQYlbAsKsSsEexhSKKIVEdRGUTn01CJBSHURlEdEIojJDqIUh0QiiMojpDKJOiESDiOkFIUhMTYFbGsSkSwNzSyUuh2xf30elL5G37X2lsQqIpE8RsR8Q2JSJ2BYriCw6IniDErYFi9ESxA4lbAsKRKwHEq0BodERcQWLWFsOliTQtizQGi9ERaA0VaA0OiJWFaK2A0OiJ4i4lWgWJ0vKWIR7GHRGTGTEGOXTrydMKYiGQ6OTJjJiDIdJye4UxUFDo5MmMmKhkTpORTGTAhkOjkUFGQUOiMEKCOkhQD2FJ0QoBmAdLyUW4zFZel5C4GwsVsnRyzYrZrgbHS8s2K2ZsW46ORbFbM2K2Ol5a4GzNitjpeRbFcgOQrY6OTZGJ3MTo4MpDKRjHK66zDKQykAwukMpDKRjC6kwykFSMYUmGUhlIxhSYZSCpGMKzuGTHTMYtY06GSMY1jnrMRsxiauEbEcjGM10zCuYrmYwreYVzA5gMS61nnAcxXMxhdXnCuYrmYxLq84VzFcwmF1ecI6grmYxKTCuYjmEwqzC84YxhSY//2Q=="
           className="card-img-top" alt= "nxtjs" />                    
            <div className="card-body">
                     <h5 className="card-title font-weight-bold">NEXTJS</h5>
            </div>
            </div>
            </div>

            </div>

            <div>
            <NavLink to="./About" className="btn btn-primary">
                            TO KNOW ABOUT THESE !!
                            </NavLink> 

                            </div>     

    </>
    )
}

export default Sdata;