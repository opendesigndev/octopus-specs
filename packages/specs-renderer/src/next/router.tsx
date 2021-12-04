// this is here so that octopus-format works without any patches
import { useLocation } from 'react-router'

export function useRouter() {
  return { pathname: useLocation().pathname }
}
