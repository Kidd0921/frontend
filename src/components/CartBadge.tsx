const CartBadge = ({ count } : {count: number}) => {
  return (
    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#f35c7a] rounded-full text-white text-sm flex items-center justify-center">
      {count}
    </div>
  )
}

export default CartBadge
