
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Date;
import java.util.function.Consumer;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Ch1Servlet extends HttpServlet {
	
	public void doGet(HttpServletRequest request,
			HttpServletResponse response)
			throws IOException {
		PrintWriter out = response.getWriter();
		Date today = new Date();
		
		
		StringBuilder sb = new StringBuilder();
		sb.append("<html> " +
			    "<body>"+
			    "<h1 align=center>HF\'s Chapter1 Servlet</h1>"
			    + "<br>"+today);
		
		Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).stream()
			.forEach(new Consumer<Integer>() {
				@Override
				public void accept(Integer i) {
					sb.append("<br>");
					sb.append(i);
				}
			});;
		
		sb.append("</body></html>");
		
		out.println(sb.toString());
	}
}
