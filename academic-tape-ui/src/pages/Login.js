import React, { useState } from "react";
import Base from "../components/Base";
import { Form, FormGroup, Label, Input, Button, Card, CardHeader, CardBody, Container} from "reactstrap";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

      const formSubmit = (event) => {
        event.preventDefault();
        // Process the sign-up data (e.g., send it to a server)
        console.log('Sign-up data submitted:', formData);
      };
    
    return (
        <Base>
            <div class="container py-3">
                <div class="row justify-content-center align-items-center ">

                    <div class="col-md-5 " color="secondary" >

                        <div class="col-md-12 py-5">
                            <Card                            >
                                <CardHeader className="text-center">
                                    USER LOGIN
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={formSubmit}>
                                        <FormGroup>
                                            <Label for="email">Email </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                placeholder="Enter your Email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password </Label>
                                            <Input
                                                id="password"
                                                name="password"
                                                placeholder="Enter your Password"
                                                type="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </FormGroup>
                                        
                                        <Container className="text-center">
                                            <Button color="success">Login</Button>
                                            <a class=" px-3" href="/signup">Click here new register</a>
                                        </Container>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>

        </Base>
    );
};

export default Login;