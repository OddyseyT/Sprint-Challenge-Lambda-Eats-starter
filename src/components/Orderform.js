import React, {useState, useEffect} from 'react';
import { Card, Button, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const Orderform = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState)=> !prevState)
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        size: "",
        extraCheese: false,
        sausage: false,
        pepperoni: false,
        canadian: false,
        anchovies: false,
        olives: false,
        mushrooms: false,
        greenPeppers: false,
        onions: false,
        tomatoes: false,
        pineapple: false,
        special: ""
    })

    const schema = yup.object().shape({
        name: yup.string().required("Name is required").min(2),
        size: yup.string().required("Must select a pizza size")
      })

    useEffect(() => {
        schema.isValid(formData).then(valid => {
          setButtonDisabled(!valid);
        })
        
      }, [formData]);

      const submit = () => {
        schema.validate(formData).then( () => {
          axios.post("https://reqres.in/api/users", formData).then( (res) => {
          console.log(res.data)
         })
        })
      }
      const handleChanges = event => {
        event.persist();
          setFormData({ ...formData, [event.target.name]: event.target.value });
          console.log(event)
          
        };
      const handleToppings = event => {
          setFormData({ ...formData, [event.target.name]: event.target.checked })
      }




        return (
            <>
            <Card color="info">
                <h2 style={{color: "white", margin: "0 auto"}}>Build Your Own Pizza</h2>
            </Card>
            <Form onSubmit={
                (event) => {
                    event.preventDefault();
                   submit();
                    setFormData({name: "",
                     size: "",
                    extraCheese: false,
                sausage: false,
                pepperoni: false,
                canadian: false,
                anchovies: false,
                olives: false,
                 mushrooms: false,
                 greenPeppers: false,
                 onions: false,
                 tomatoes: false,
                 pineapple: false,
                 xSauce: false,
                special: ""})
                  }} style={{margin: "5%"}}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input name="name" data-cy="name" id="name" placeholder="name" value={formData.name} onChange={handleChanges}/>
                    
                </FormGroup>
                <FormGroup>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret >{formData.size === "" ? "Size" : formData.size}
      </DropdownToggle>
      
      <DropdownMenu>
     
            <option value="small" onClick={() => {
                toggle();
                setFormData({...formData, size: "small"})
            }}>Small</option>
              <option value="medium" onClick={() => {
                toggle();
                setFormData({...formData, size: "medium"})
            }}>Medium</option>
              <option value="large" onClick={() => {
                toggle();
                setFormData({...formData, size: "large"})
            }}>Large</option>
              <option value="xLarge" onClick={() => {
                toggle();
                setFormData({...formData, size: "xLarge"})
            }}>Extra Large</option>
              </DropdownMenu>
            </Dropdown>
              
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" data-cy="extracheese" id="extraCheese" name="extraCheese" checked={formData.extraCheese} onChange={handleToppings}/>{' '}
              Extra Cheese
            </Label>
          </FormGroup> 
          <FormGroup check>
            <Label check>
              <Input type="checkbox" data-cy="sausage" id="sausage" name="sausage" checked={formData.sausage} onChange={handleToppings}/>{' '}
              Sausage
            </Label>
          </FormGroup> 
          <FormGroup check>
              <Label check>
                  <Input type="checkbox" data-cy="pepperoni" id="pepperoni" name="pepperoni" checked={formData.pepperoni} onChange={handleToppings}/> {' '}
                  Pepperoni
              </Label>
          </FormGroup>
          <FormGroup check>
              <Label check>
                  <Input type="checkbox" data-cy="canadian" id="canadian" name="canadian" checked={formData.canadian} onChange={handleToppings}/> {' '}
                  Canadian Bacon
              </Label>
          </FormGroup>
          <FormGroup check>
              <Label check>
                  <Input type="checkbox" data-cy="anchovies" id="anchovies" name="anchovies" checked={formData.anchovies} onChange={handleToppings}/> {' '}
                  Anchovies
              </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" data-cy="olives" id="olives" name="olives" checked={formData.olives} onChange={handleToppings}/>{' '}
              Black Olives
            </Label>
          </FormGroup> 
          <FormGroup check>
              <Label check>
                  <Input type="checkbox" data-cy="mushrooms" id="mushrooms" name="mushrooms" checked={formData.mushrooms} onChange={handleToppings}/> {' '}
                  Mushrooms
              </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" data-cy="greenPeppers" id="greenPeppers" name="greenPeppers" checked={formData.greenPeppers} onChange={handleToppings}/>{' '}
              Green Peppers
            </Label>
          </FormGroup> 
          <FormGroup check>
              <Label check>
                  <Input type="checkbox" data-cy="onions" id="onions" name="onions" checked={formData.onions} onChange={handleToppings}/> {' '}
                  Onions
              </Label>
          </FormGroup>
          <FormGroup check>
              <Label check>
                  <Input type="checkbox" data-cy="tomatoes" id="tomatoes" name="tomatoes" checked={formData.tomatoes} onChange={handleToppings}/> {' '}
                  Fresh tomatoes
              </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" data-cy="xSauce" id="xSauce" name="xSauce" checked={formData.xSauce} onChange={handleToppings}/>{' '}
              Extra sauce
            </Label>
          </FormGroup> 
         
          <FormGroup>
            <Label for="special">Special Instructions</Label>
            <Input type="textarea" data-cy="special" name="special" id="special" value={formData.special} onChange={handleChanges}/>
          </FormGroup>
          <Button data-cy="submit" disabled={buttonDisabled}>Add to order</Button>
        </Form>
        </>
        )
        }
    
    export default Orderform;
