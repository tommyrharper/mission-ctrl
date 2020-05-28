// for enzyme
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
// for rtl
import '@testing-library/jest-dom/extend-expect'
configure({ adapter: new Adapter() })
