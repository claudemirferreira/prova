package br.com.fpf.prova.agenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.fpf.prova.agenda.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

}