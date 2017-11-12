import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import jestLocalstorageMock from 'jest-localstorage-mock';
// console.log('oi');

configure({ adapter: new Adapter() });
