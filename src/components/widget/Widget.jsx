import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import './widget.scss'


const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMony: false,
        link: 'See all users',
        icon: (
          <PersonOutlineOutlinedIcon className='icon' style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2) " }} />
        )
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMony: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon className='icon' style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2) " }} />
        )
      };
      break;
    case 'erarning':
      data = {
        title: 'ERARNINGS',
        isMony: true,
        link: 'View all earnings',
        icon: (
          <MonetizationOnOutlinedIcon className='icon' style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2) " }} />
        )
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMony: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2) " }} />
        )
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMony && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"> <KeyboardArrowUpIcon /> {diff} %</div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
