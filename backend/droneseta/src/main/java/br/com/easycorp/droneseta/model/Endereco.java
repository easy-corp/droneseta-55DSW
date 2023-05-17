package br.com.easycorp.droneseta.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Endereco {
      @Id
      @GeneratedValue
      private int id;
      @ManyToOne
      @JsonIgnore
      private Usuario usuario;
      private TipoEndereco tipoEndereco;
      private String descricao;

      public Endereco() {
      }

      public Endereco(int id, Usuario usuario, TipoEndereco tipoEndereco, String descricao) {
            this.id = id;
            this.usuario = usuario;
            this.tipoEndereco = tipoEndereco;
            this.descricao = descricao;
      }

      public Endereco(Usuario usuario, TipoEndereco tipoEndereco, String descricao) {
            this.usuario = usuario;
            this.tipoEndereco = tipoEndereco;
            this.descricao = descricao;
      }

      public int getId() {
            return id;
      }

      public void setId(int id) {
            this.id = id;
      }

      public Usuario getUsuario() {
            return usuario;
      }

      public void setUsuario(Usuario usuario) {
            this.usuario = usuario;
      }

      public TipoEndereco getTipoEndereco() {
            return tipoEndereco;
      }

      public void setTipoEndereco(TipoEndereco tipoEndereco) {
            this.tipoEndereco = tipoEndereco;
      }

      public String getDescricao() {
            return descricao;
      }

      public void setDescricao(String descricao) {
            this.descricao = descricao;
      }

      @Override
      public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + id;
            result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
            result = prime * result + ((tipoEndereco == null) ? 0 : tipoEndereco.hashCode());
            result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
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
            Endereco other = (Endereco) obj;
            if (id != other.id)
                  return false;
            if (usuario == null) {
                  if (other.usuario != null)
                        return false;
            } else if (!usuario.equals(other.usuario))
                  return false;
            if (tipoEndereco != other.tipoEndereco)
                  return false;
            if (descricao == null) {
                  if (other.descricao != null)
                        return false;
            } else if (!descricao.equals(other.descricao))
                  return false;
            return true;
      }

      @Override
      public String toString() {
            return "Endereco [id=" + id + ", usuario=" + usuario + ", tipoEndereco=" + tipoEndereco + ", descricao="
                        + descricao + "]";
      }

}
