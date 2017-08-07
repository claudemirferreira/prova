package br.com.fpf.prova.agenda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.fpf.prova.agenda.entity.Cliente;
import br.com.fpf.prova.agenda.repository.ClienteRepository;

@RequestMapping("/clientes")
@Controller
public class ClienteResource {

    @Autowired
    private ClienteRepository service;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Cliente> findAll() {
        List<Cliente> list = service.findAll();
        return list;
    }

    @RequestMapping(value = "/pesquisar", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Cliente> pesquisar(@RequestBody Cliente cliente) {
        List<Cliente> lista = service.findByNomeContainingIgnoreCase(cliente.getNome());
        return lista;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Cliente find(@PathVariable Long id) {
        System.out.println(id);
        Cliente cliente = service.findOne(id);
        return cliente;
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Cliente create(@RequestBody Cliente cliente) {
        return service.save(cliente);
    }

    @RequestMapping(value = "/{id:[0-9][0-9]*}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Cliente cliente = service.findOne(id);
        service.delete(cliente);
        return new ResponseEntity<Cliente>(HttpStatus.OK);

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public Cliente update(@RequestBody Cliente cliente) {
        return service.save(cliente);
    }

}