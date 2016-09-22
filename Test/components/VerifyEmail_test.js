import {renderComponent ,expect ,server } from '../test_helper';
import VerifyEmail from '../../public/components/VerifyEmail';
describe("VerifyEmail" ,()=>{
let component ;
beforeEach(()=>{
  component = renderComponent(VerifyEmail , {params:{token:'123454' },
                                             email:"postrahil@gmail.com",
                                             isLoading:false} , {} );
});


  it(" displays 'verifying email address' unless response is received from server ",()=>{
    expect(component.find('p')).to.contain("verifying Email address");
    expect(component).to.have.class('Loading');
  });



});
