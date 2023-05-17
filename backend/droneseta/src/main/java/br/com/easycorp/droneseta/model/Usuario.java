package br.com.easycorp.droneseta.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Usuario {
    @Id
    @GeneratedValue
    @Column(unique = true)
    private int id;
    private Role tipo;
    private String nome;
    private Date dataNascimento;
    private String cpf;
    private String email;
    private String cartaoCredito;
    private String username;
    private String password;

    @OneToMany(mappedBy = "usuario")
    private List<Endereco> enderecos = new ArrayList<>();

    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos = new ArrayList<>();

    public Usuario() {
    }

    public Usuario(Role tipo, String nome, Date dataNascimento, String cpf, String email, String cartaoCredito,
            String username,
            String password,
            Endereco endereco, List<Pedido> pedidos, List<Endereco> enderecos) {
        this.tipo = tipo;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.cartaoCredito = cartaoCredito;
        this.username = username;
        this.password = password;
        this.enderecos = enderecos;
        this.pedidos = pedidos;
    }

    public Usuario(Role tipo, String nome, Date dataNascimento, String cpf, String email, String cartaoCredito,
            String username,
            String password) {
        this.tipo = tipo;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.cartaoCredito = cartaoCredito;
        this.username = username;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Role getTipo() {
        return tipo;
    }

    public void setTipo(Role tipo) {
        this.tipo = tipo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCartaoCredito() {
        return cartaoCredito;
    }

    public void setCartaoCredito(String cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Endereco> getEnderecos() {
        return enderecos;
    }

    public void setEnderecos(List<Endereco> enderecos) {
        this.enderecos = enderecos;
    }

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((tipo == null) ? 0 : tipo.hashCode());
        result = prime * result + ((nome == null) ? 0 : nome.hashCode());
        result = prime * result + ((dataNascimento == null) ? 0 : dataNascimento.hashCode());
        result = prime * result + ((cpf == null) ? 0 : cpf.hashCode());
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((cartaoCredito == null) ? 0 : cartaoCredito.hashCode());
        result = prime * result + ((username == null) ? 0 : username.hashCode());
        result = prime * result + ((password == null) ? 0 : password.hashCode());
        result = prime * result + ((enderecos == null) ? 0 : enderecos.hashCode());
        result = prime * result + ((pedidos == null) ? 0 : pedidos.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Usuario other = (Usuario) obj;
        if (id != other.id)
            return false;
        if (tipo != other.tipo)
            return false;
        if (nome == null) {
            if (other.nome != null)
                return false;
        } else if (!nome.equals(other.nome))
            return false;
        if (dataNascimento == null) {
            if (other.dataNascimento != null)
                return false;
        } else if (!dataNascimento.equals(other.dataNascimento))
            return false;
        if (cpf == null) {
            if (other.cpf != null)
                return false;
        } else if (!cpf.equals(other.cpf))
            return false;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (cartaoCredito == null) {
            if (other.cartaoCredito != null)
                return false;
        } else if (!cartaoCredito.equals(other.cartaoCredito))
            return false;
        if (username == null) {
            if (other.username != null)
                return false;
        } else if (!username.equals(other.username))
            return false;
        if (password == null) {
            if (other.password != null)
                return false;
        } else if (!password.equals(other.password))
            return false;
        if (enderecos == null) {
            if (other.enderecos != null)
                return false;
        } else if (!enderecos.equals(other.enderecos))
            return false;
        if (pedidos == null) {
            if (other.pedidos != null)
                return false;
        } else if (!pedidos.equals(other.pedidos))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Usuario [id=" + id + ", tipo=" + tipo + ", nome=" + nome + ", dataNascimento=" + dataNascimento
                + ", cpf=" + cpf + ", email=" + email + ", cartaoCredito=" + cartaoCredito + ", username=" + username
                + ", password=" + password + ", enderecos=" + enderecos + ", pedidos=" + pedidos + "]";
    }

}
