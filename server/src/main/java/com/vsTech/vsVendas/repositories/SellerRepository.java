package com.vsTech.vsVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vsTech.vsVendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{
	
}
