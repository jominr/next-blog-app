"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

  // 这是： CLIENT SIDE NAVIGATION
  const router = useRouter()
  // 例如：/contact
  const pathname = usePathname()
  
  // 获取 query
  const searchParams = useSearchParams()
  const q = searchParams.get("q")
  console.log(q)
  // 也可以通过 searchParams.set, 设置query

  const handleClick = ()=>{
    console.log("clicked")
    router.push("/");
    router.replace("/");
    router.refresh("/");
    router.back();
    router.forward()
  }

  return (
    <div>
      {/* prefetch： */}
      <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage