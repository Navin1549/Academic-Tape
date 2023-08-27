import React,{ useState } from "react";
import Base from "../components/Base";
import { Form, FormGroup, Label, Input, Button, Card, CardHeader, CardBody, Container } from "reactstrap";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        college: '',
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

                    <div class="col-md-6 " color="secondary" >

                        <div class="col-md-12 py-5">
                            <Card                            >
                                <CardHeader className="text-center">
                                    NEW USER REGISTER
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={formSubmit}>
                                        <FormGroup>
                                            <Label for="name">Name </Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Enter your name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </FormGroup>
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
                                        <FormGroup>
                                            <Label for="role"> Select Your Role </Label>
                                            <Input
                                                id="role"
                                                name="role"
                                                type="select"
                                                value={formData.role}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value={''} className="text-muted">--Choose your role -- </option>
                                                <option value={'Student'}>Student </option>
                                                <option value={'Teacher'}>Teacher </option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="college"> Select Your Role </Label>
                                            <Input
                                                id="college"
                                                name="college"
                                                type="select"
                                                value={formData.college}
                                                onChange={handleChange}
                                                required
                                                
                                            >
                                                <option value={''} className="text-muted">--Choose your college -- </option>
                                                <option value={'NIT Bhopal'}>NIT Bhopal </option>
                                                <option value={'NIT Raipur'}>NIT Raipur </option>
                                            </Input>
                                        </FormGroup>
                                        <Container className="text-center">
                                            <Button color="success" type="submit">Register</Button>
                                            <a class=" px-3" href="/login">Click here Login</a>
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

export default Signup;