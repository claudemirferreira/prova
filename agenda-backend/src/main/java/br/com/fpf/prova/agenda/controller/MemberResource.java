package br.com.fpf.prova.agenda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.fpf.prova.agenda.entity.Member;
import br.com.fpf.prova.agenda.repository.MemberRepository;

@RequestMapping("/members")
@Controller
public class MemberResource {

    @Autowired
    private MemberRepository service;

    @RequestMapping(method = RequestMethod.GET, produces={MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseBody
    public List<Member> findAll() {
        List<Member> list = service.findAll();
        return list;
    }
}