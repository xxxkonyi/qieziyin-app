import React, {PropTypes} from "react"
import S from "shorti"
import {Link} from "react-router"
import {Layout, Header, HeaderRow, Navigation, Content} from "react-mdl"

// style={ S('text-center') }
const logo = 'material-icons'

const NavigationLayout = ({children}) => {
  return (
    <div>
      <Layout >
        <Header title={<strong>茄子印1</strong>}>
            <Navigation>
              <Link to="/">首页</Link>
              <Link to="/repos">印记</Link>
            </Navigation>
        </Header>
        <Content>
          {children}
        </Content>
      </Layout>
    </div>
  )
}

NavigationLayout.propTypes = {
//  duang: PropTypes.objectOf(PropTypes.shape({
//    message: PropTypes.string.isRequired,
//    counter: PropTypes.number.isRequired
//  }).isRequired).isRequired,
//  message: PropTypes.string.isRequired,
//  counter: PropTypes.number.isRequired,
//  doDuang: PropTypes.func.isRequired
}

export default NavigationLayout