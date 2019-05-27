package vuejsdemo.ejb;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
public class LinkService {

    @PersistenceContext
    private EntityManager em;

    public List<Link> getAllLinks() {

        String jpql = "SELECT lnk FROM Link lnk ORDER BY lnk.linkSort ASC";

        TypedQuery<Link> q = em.createQuery(jpql, Link.class);

        return q.getResultList();
    }

    public Link addLink(Link link) {
        em.persist(link);
        return link;
    }

    public void removeLink(Long linkId) {
        em.remove( em.find(Link.class, linkId) );
    }

    public void updateLink(Link link) {
        Link fromDB = em.find( Link.class, link.getLinkId() );
        fromDB.setLinkHref( link.getLinkHref() );
        fromDB.setLinkSort( link.getLinkSort() );
    }
}
