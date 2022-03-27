import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  width: auto;
  padding: 10px;

  img {
    transition: 200ms ease;
    margin: 10px;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const iconPrintImg = `/images/icon${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={iconPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='Varela Rounded", sans-serif'
            fontWeight="bold"
            ml={3}
          >
             ‎Hugo Berendi
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
