"use client";

import Image from "next/image";
import corgiLogo from "@/assets/corgi_logo.png";
import genaLogo from "@/assets/gena_logo.png";
import cornellLogo from "@/assets/cornell_logo.png";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

function EvaluatePage() {
  const data = {
    modelOne: "Llama4",
    modelOneResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet odio egestas, posuere sapien at, aliquet metus. Cras egestas est quis ultricies auctor. Mauris quam leo, vestibulum vel felis ac, pretium ullamcorper ante. Proin ac neque vitae justo scelerisque pulvinar. Etiam malesuada nisl magna, sit amet eleifend magna posuere a. Vivamus non tempor diam. Nunc commodo facilisis massa, quis commodo sapien tincidunt a. In at sapien malesuada libero accumsan aliquam. Morbi dignissim aliquam varius. Fusce vitae blandit quam, at auctor lectus. Sed dignissim nulla quam, at iaculis quam porta vitae. Praesent finibus a mi ultrices dictum. Vivamus ut pharetra ex, eu porttitor metus. Sed molestie justo lectus, vel luctus ligula vestibulum ut. Donec velit ex, interdum vehicula tincidunt non, malesuada in nunc. Nulla aliquet, lectus sit amet tristique tincidunt, velit nunc feugiat sapien, non viverra ligula urna a elit. Etiam pulvinar lacus a mi rhoncus, eu semper magna hendrerit. Suspendisse iaculis mauris vel sagittis semper.  Integer elementum posuere ipsum, quis faucibus nulla. Suspendisse finibus, nibh et gravida elementum, est justo dapibus libero, ac euismod dolor tortor vitae purus. Aenean in purus sed lorem venenatis ullamcorper. Donec tincidunt, justo elementum vulputate faucibus, arcu enim finibus lacus, id pretium ex mauris vel lorem. Ut pretium turpis elit, vitae faucibus nulla tincidunt a. Vivamus feugiat dolor nec purus suscipit bibendum. Maecenas quis rutrum mi. Quisque sollicitudin id ante a faucibus. Ut fringilla tempus sem vel semper. Suspendisse ipsum odio, ultrices sed est ac, imperdiet rutrum massa. Vivamus sed facilisis neque. Praesent non lorem sit amet dui ullamcorper consequat sed ut diam. Sed eget sollicitudin erat. Nunc laoreet orci venenatis venenatis tempus. Nam pellentesque interdum ipsum, non viverra mi blandit non. Praesent at congue ex, in venenatis augue. Quisque pulvinar vehicula dui, vel tristique eros efficitur sit amet. Nunc non posuere augue. Praesent nisl erat, finibus eu molestie sit amet, bibendum vitae lacus. Aliquam suscipit, sapien a aliquam blandit, urna nunc ullamcorper sem, vel luctus purus ex eu augue. Sed tempus vehicula tortor nec congue. Etiam sit amet rutrum felis. Nulla urna velit, interdum bibendum mauris eu, pretium cursus eros. Aenean rutrum tincidunt arcu, a blandit est iaculis ut. Mauris vel nisi et neque pharetra efficitur. Proin vitae odio vulputate purus tincidunt tincidunt. Duis ullamcorper est et volutpat tincidunt. Nam malesuada elit id porta bibendum. Etiam efficitur magna odio, eget tempus dolor tempor non. In nec mauris vitae sem commodo laoreet nec id urna. Cras dictum convallis neque, eu finibus orci interdum et. Morbi id diam odio. Fusce non magna vitae lorem imperdiet ornare congue et erat. Nulla ornare, nisl at lacinia cursus, ipsum tortor efficitur lectus, et dictum nibh orci sit amet metus. Aliquam malesuada nisl vitae nisi aliquam, non lacinia mi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet odio egestas, posuere sapien at, aliquet metus. Cras egestas est quis ultricies auctor. Mauris quam leo, vestibulum vel felis ac, pretium ullamcorper ante. Proin ac neque vitae justo scelerisque pulvinar. Etiam malesuada nisl magna, sit amet eleifend magna posuere a. Vivamus non tempor diam. Nunc commodo facilisis massa, quis commodo sapien tincidunt a. In at sapien malesuada libero accumsan aliquam. Morbi dignissim aliquam varius. Fusce vitae blandit quam, at auctor lectus. Sed dignissim nulla quam, at iaculis quam porta vitae. Praesent finibus a mi ultrices dictum. Vivamus ut pharetra ex, eu porttitor metus. Sed molestie justo lectus, vel luctus ligula vestibulum ut. Donec velit ex, interdum vehicula tincidunt non, malesuada in nunc. Nulla aliquet, lectus sit amet tristique tincidunt, velit nunc feugiat sapien, non viverra ligula urna a elit. Etiam pulvinar lacus a mi rhoncus, eu semper magna hendrerit. Suspendisse iaculis mauris vel sagittis semper.  Integer elementum posuere ipsum, quis faucibus nulla. Suspendisse finibus, nibh et gravida elementum, est justo dapibus libero, ac euismod dolor tortor vitae purus. Aenean in purus sed lorem venenatis ullamcorper. Donec tincidunt, justo elementum vulputate faucibus, arcu enim finibus lacus, id pretium ex mauris vel lorem. Ut pretium turpis elit, vitae faucibus nulla tincidunt a. Vivamus feugiat dolor nec purus suscipit bibendum. Maecenas quis rutrum mi. Quisque sollicitudin id ante a faucibus. Ut fringilla tempus sem vel semper. Suspendisse ipsum odio, ultrices sed est ac, imperdiet rutrum massa. Vivamus sed facilisis neque. Praesent non lorem sit amet dui ullamcorper consequat sed ut diam. Sed eget sollicitudin erat. Nunc laoreet orci venenatis venenatis tempus. Nam pellentesque interdum ipsum, non viverra mi blandit non. Praesent at congue ex, in venenatis augue. Quisque pulvinar vehicula dui, vel tristique eros efficitur sit amet. Nunc non posuere augue.",
    modelTwo: "GPT-o3",
    modelTwoResponse: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  };

  const prompt = "What is my best selling product?";
  const modelOne = data.modelOne;
  const modelTwo = data.modelTwo;
  const modelOneResponse = data.modelOneResponse;
  const modelTwoResponse = data.modelTwoResponse;

  return (
    <div className="md:p-8">
      <div id="corgi-logo" className="mb-4 sm:mb-8">
        <Image
          src={corgiLogo}
          width={500}
          height={500}
          alt="Corgi logo"
        />
      </div>

      <div className="max-w-xl m-auto">
        <div className="pb-4 text-center">
          <h2>{"This is the prompt in plain English"}</h2>
        </div>
        <Table hideHeader removeWrapper layout="fixed">
          <TableHeader>
            <TableColumn className="border text-center">{""}</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border align-text-top">{prompt}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>


      <div className="pt-4 sm:pt-8 pb-4 text-center">
        <h2>{"Which is the better response?"}</h2>
      </div>
      <div id="desktopBetterResponseTable" className="flex hidden md:block">
        <Table removeWrapper layout="fixed">
          <TableHeader>
            <TableColumn className="border text-center">{modelOne}</TableColumn>
            <TableColumn className="border text-center">{modelTwo}</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border align-text-top">
                <div className="max-h-64 overflow-y-auto blur-bottom">
                {modelOneResponse}
                </div>
              </TableCell>
              <TableCell className="border align-text-top">
                <div className="max-h-64 overflow-y-auto">
                  {modelTwoResponse}
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border text-center">
                <Button className="bg-carnelian text-white">{modelOne}{" wrote the better recommendation"}</Button>
              </TableCell>
              <TableCell className="border text-center">
                <Button className="bg-carnelian text-white">{modelTwo}{" wrote the better recommendation"}</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div  id="mobileBetterResponseTable" className="md:hidden">
        <Table layout="fixed">
          <TableHeader>
            <TableColumn className="border text-center">{modelOne}</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border align-text-top">{modelOneResponse}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border text-center">
                <Button className="bg-carnelian text-white">{modelOne}{" wrote the better recommendation"}</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="mb-4" />
        <Table layout="fixed">
          <TableHeader>
            <TableColumn className="border text-center">{modelTwo}</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border align-text-top">{modelTwoResponse}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border text-center">
                <Button className="bg-carnelian text-white">{modelTwo}{" wrote the better recommendation"}</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EvaluatePage;
