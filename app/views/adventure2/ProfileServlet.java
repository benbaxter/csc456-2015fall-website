package edu.nku.csc456.profile;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class ProfileServlet extends HttpServlet {

	public void doPost(HttpServletRequest request,
			HttpServletResponse response)
			throws IOException {
		PrintWriter out = response.getWriter();
		String firstName = request.getParameter("first_name");
		String lastName = request.getParameter("last_name");
		out.println("<html> " +
			    "<body>"+
			    "<h1 align=center>Hello!  " + firstName + "  " + lastName + "</h1>" +
			    "</body>"+"</html>");
	}

}