import React, { useMemo } from 'react'
import Section from '../components/Base/Section'

import brandsList from '../data/brands.json'
import { sortByWorks } from '../utils/brands'
import BrandBlock from '../components/Brands/BrandBlock'
import { Col, Row } from 'react-bootstrap'

export default function Clients() {
  const mainBrands = useMemo(() => brandsList.main.sort(sortByWorks), [brandsList])
  const otherBrands = useMemo(() => brandsList.other.sort(sortByWorks), [brandsList])

  const brands = [...mainBrands, ...otherBrands]
  return (
    <Section title='Клиенты'>
      <Row>
        {
          brands.map((brand, index) => (
            <Col xs="12" lg="6">
              <BrandBlock {...brand} key={`brand-block-mainBrands-${index}`}/>
            </Col>
          ))
        }
      </Row>
    </Section>
  )
}
