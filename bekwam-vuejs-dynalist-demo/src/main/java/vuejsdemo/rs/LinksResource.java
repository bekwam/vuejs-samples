package vuejsdemo.rs;

import vuejsdemo.ejb.Link;
import vuejsdemo.ejb.LinkService;

import javax.ejb.EJB;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/links")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LinksResource {

    @EJB
    private LinkService linkService;

    @GET
    public List<Link> getAllLinks() {
        return linkService.getAllLinks();
    }

    @POST
    public Link addLink(@Valid Link link) {
        return linkService.addLink(link);
    }

    @DELETE
    @Path("/{id}")
    public void deleteLink(@PathParam("id") Long linkId) {
        linkService.removeLink(linkId);
    }

    @PUT
    @Path("/{id}")
    public void updateLink(@PathParam("id") Long linkId, @Valid Link link) {
        link.setLinkId(linkId);  // for security
        linkService.updateLink(link);
    }
}