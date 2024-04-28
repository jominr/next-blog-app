"use client"

const ClientSideProviderTest = ({children}) => {
  return (
    <div>
      {/* 如果用这个wrap包裹，子组件也依然是server side render */}
      {children}
    </div>
  )
}

export default ClientSideProviderTest