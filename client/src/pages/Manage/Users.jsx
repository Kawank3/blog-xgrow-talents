import { useEffect } from "react";
import { useState } from "react";
import { toast } from "sonner";

const Users = ({ user }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(`/api/user`, {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  const onChange = async (u, v) => { 
    try {
      let res = await fetch(`/api/user`, {
        method: "PUT",
        body: JSON.stringify({
          id: u.id,
          role: v
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        }
      });

      if (!res.ok)
        throw "";

      toast.success("Usuário atualizado com sucesso.")
      setUsers(users => {
        let user = users.find(x => x.id == u.id);
        user.role = v;
        return [...users];
      });

    } catch (err) {
      console.log(err);
      toast.error("Ops... Erro ao atualizar usuário.")
    }
  }

  const onClick = async (id) => {
    try {
      let res = await fetch(`/api/user`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        }
      });

      if (!res.ok)
        throw "";

      toast.success("Usuário deletado com sucesso.")
      setUsers(users => users.filter(x => x.id != id)); 
    } catch (err) {
      console.log(err);
      toast.error("Ops... Erro ao deletar usuário.")
    }
  }

  return <>
    {
      !users &&
      <h3>Carregando...</h3>
    }
    {
      users &&
      users.map((user, i) =>
      <div className="manage-item" key={i}>
        <h4 style={{ margin: 0 }}>{user.name} ({user.id.slice(0, 12)}...)</h4>
        <div>
          <select value={user.role} onChange={(e) => onChange(user, e.target.value)}>
            <option>ADMIN</option>
            <option>USER</option>
          </select>
          <button onClick={() => onClick(user.id)} style={{ background: "#ff374f" }}>Deletar</button>
        </div>   
      </div>
      )
    }
  </>;
}

export default Users;
