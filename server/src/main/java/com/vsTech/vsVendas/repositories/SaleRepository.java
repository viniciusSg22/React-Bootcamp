package com.vsTech.vsVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vsTech.vsVendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
