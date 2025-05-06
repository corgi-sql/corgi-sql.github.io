"use client";

import { ReactNode, useActionState, useState, useEffect } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import corgiLogo from "@/assets/corgi_logo.png";
import genaLogo from "@/assets/gena_logo.png";
import cornellLogo from "@/assets/cornell_logo.png";


function ComparePage() {
  const data = [
    {
      prompt: "What is my best selling product?",
      responses: [
        {
          model: "Llama4",
          response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet odio egestas, posuere sapien at, aliquet metus. Cras egestas est quis ultricies auctor. Mauris quam leo, vestibulum vel felis ac, pretium ullamcorper ante. Proin ac neque vitae justo scelerisque pulvinar. Etiam malesuada nisl magna, sit amet eleifend magna posuere a. Vivamus non tempor diam. Nunc commodo facilisis massa, quis commodo sapien tincidunt a. In at sapien malesuada libero accumsan aliquam. Morbi dignissim aliquam varius. Fusce vitae blandit quam, at auctor lectus. Sed dignissim nulla quam, at iaculis quam porta vitae. Praesent finibus a mi ultrices dictum. Vivamus ut pharetra ex, eu porttitor metus. Sed molestie justo lectus, vel luctus ligula vestibulum ut. Donec velit ex, interdum vehicula tincidunt non, malesuada in nunc. Nulla aliquet, lectus sit amet tristique tincidunt, velit nunc feugiat sapien, non viverra ligula urna a elit. Etiam pulvinar lacus a mi rhoncus, eu semper magna hendrerit. Suspendisse iaculis mauris vel sagittis semper.  Integer elementum posuere ipsum, quis faucibus nulla. Suspendisse finibus, nibh et gravida elementum, est justo dapibus libero, ac euismod dolor tortor vitae purus. Aenean in purus sed lorem venenatis ullamcorper. Donec tincidunt, justo elementum vulputate faucibus, arcu enim finibus lacus, id pretium ex mauris vel lorem. Ut pretium turpis elit, vitae faucibus nulla tincidunt a. Vivamus feugiat dolor nec purus suscipit bibendum. Maecenas quis rutrum mi. Quisque sollicitudin id ante a faucibus. Ut fringilla tempus sem vel semper. Suspendisse ipsum odio, ultrices sed est ac, imperdiet rutrum massa. Vivamus sed facilisis neque. Praesent non lorem sit amet dui ullamcorper consequat sed ut diam. Sed eget sollicitudin erat. Nunc laoreet orci venenatis venenatis tempus. Nam pellentesque interdum ipsum, non viverra mi blandit non. Praesent at congue ex, in venenatis augue. Quisque pulvinar vehicula dui, vel tristique eros efficitur sit amet. Nunc non posuere augue. Praesent nisl erat, finibus eu molestie sit amet, bibendum vitae lacus. Aliquam suscipit, sapien a aliquam blandit, urna nunc ullamcorper sem, vel luctus purus ex eu augue. Sed tempus vehicula tortor nec congue. Etiam sit amet rutrum felis. Nulla urna velit, interdum bibendum mauris eu, pretium cursus eros. Aenean rutrum tincidunt arcu, a blandit est iaculis ut. Mauris vel nisi et neque pharetra efficitur. Proin vitae odio vulputate purus tincidunt tincidunt. Duis ullamcorper est et volutpat tincidunt. Nam malesuada elit id porta bibendum. Etiam efficitur magna odio, eget tempus dolor tempor non. In nec mauris vitae sem commodo laoreet nec id urna. Cras dictum convallis neque, eu finibus orci interdum et. Morbi id diam odio. Fusce non magna vitae lorem imperdiet ornare congue et erat. Nulla ornare, nisl at lacinia cursus, ipsum tortor efficitur lectus, et dictum nibh orci sit amet metus. Aliquam malesuada nisl vitae nisi aliquam, non lacinia mi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet odio egestas, posuere sapien at, aliquet metus. Cras egestas est quis ultricies auctor. Mauris quam leo, vestibulum vel felis ac, pretium ullamcorper ante. Proin ac neque vitae justo scelerisque pulvinar. Etiam malesuada nisl magna, sit amet eleifend magna posuere a. Vivamus non tempor diam. Nunc commodo facilisis massa, quis commodo sapien tincidunt a. In at sapien malesuada libero accumsan aliquam. Morbi dignissim aliquam varius. Fusce vitae blandit quam, at auctor lectus. Sed dignissim nulla quam, at iaculis quam porta vitae. Praesent finibus a mi ultrices dictum. Vivamus ut pharetra ex, eu porttitor metus. Sed molestie justo lectus, vel luctus ligula vestibulum ut. Donec velit ex, interdum vehicula tincidunt non, malesuada in nunc. Nulla aliquet, lectus sit amet tristique tincidunt, velit nunc feugiat sapien, non viverra ligula urna a elit. Etiam pulvinar lacus a mi rhoncus, eu semper magna hendrerit. Suspendisse iaculis mauris vel sagittis semper.  Integer elementum posuere ipsum, quis faucibus nulla. Suspendisse finibus, nibh et gravida elementum, est justo dapibus libero, ac euismod dolor tortor vitae purus. Aenean in purus sed lorem venenatis ullamcorper. Donec tincidunt, justo elementum vulputate faucibus, arcu enim finibus lacus, id pretium ex mauris vel lorem. Ut pretium turpis elit, vitae faucibus nulla tincidunt a. Vivamus feugiat dolor nec purus suscipit bibendum. Maecenas quis rutrum mi. Quisque sollicitudin id ante a faucibus. Ut fringilla tempus sem vel semper. Suspendisse ipsum odio, ultrices sed est ac, imperdiet rutrum massa. Vivamus sed facilisis neque. Praesent non lorem sit amet dui ullamcorper consequat sed ut diam. Sed eget sollicitudin erat. Nunc laoreet orci venenatis venenatis tempus. Nam pellentesque interdum ipsum, non viverra mi blandit non. Praesent at congue ex, in venenatis augue. Quisque pulvinar vehicula dui, vel tristique eros efficitur sit amet. Nunc non posuere augue.",
          score: 96,
        },
        {
          model: "GPT-o3",
          response: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
          score: 92,
        },
        {
          model: "Contextual-SQL",
          response: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
          score: 90,
        },
        {
          model: "XiYan-SQL",
          response: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
          score: 88,
        },
      ],
    },
    {
      prompt: "Which product is most at risk of running out of inventory?",
      responses: [
        {
          model: "Llama4",
          response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet odio egestas, posuere sapien at, aliquet metus. Cras egestas est quis ultricies auctor. Mauris quam leo, vestibulum vel felis ac, pretium ullamcorper ante. Proin ac neque vitae justo scelerisque pulvinar. Etiam malesuada nisl magna, sit amet eleifend magna posuere a. Vivamus non tempor diam. Nunc commodo facilisis massa, quis commodo sapien tincidunt a. In at sapien malesuada libero accumsan aliquam. Morbi dignissim aliquam varius. Fusce vitae blandit quam, at auctor lectus. Sed dignissim nulla quam, at iaculis quam porta vitae. Praesent finibus a mi ultrices dictum. Vivamus ut pharetra ex, eu porttitor metus. Sed molestie justo lectus, vel luctus ligula vestibulum ut. Donec velit ex, interdum vehicula tincidunt non, malesuada in nunc. Nulla aliquet, lectus sit amet tristique tincidunt, velit nunc feugiat sapien, non viverra ligula urna a elit. Etiam pulvinar lacus a mi rhoncus, eu semper magna hendrerit. Suspendisse iaculis mauris vel sagittis semper.  Integer elementum posuere ipsum, quis faucibus nulla. Suspendisse finibus, nibh et gravida elementum, est justo dapibus libero, ac euismod dolor tortor vitae purus. Aenean in purus sed lorem venenatis ullamcorper. Donec tincidunt, justo elementum vulputate faucibus, arcu enim finibus lacus, id pretium ex mauris vel lorem. Ut pretium turpis elit, vitae faucibus nulla tincidunt a. Vivamus feugiat dolor nec purus suscipit bibendum. Maecenas quis rutrum mi. Quisque sollicitudin id ante a faucibus. Ut fringilla tempus sem vel semper. Suspendisse ipsum odio, ultrices sed est ac, imperdiet rutrum massa. Vivamus sed facilisis neque. Praesent non lorem sit amet dui ullamcorper consequat sed ut diam. Sed eget sollicitudin erat. Nunc laoreet orci venenatis venenatis tempus. Nam pellentesque interdum ipsum, non viverra mi blandit non. Praesent at congue ex, in venenatis augue. Quisque pulvinar vehicula dui, vel tristique eros efficitur sit amet. Nunc non posuere augue. Praesent nisl erat, finibus eu molestie sit amet, bibendum vitae lacus. Aliquam suscipit, sapien a aliquam blandit, urna nunc ullamcorper sem, vel luctus purus ex eu augue. Sed tempus vehicula tortor nec congue. Etiam sit amet rutrum felis. Nulla urna velit, interdum bibendum mauris eu, pretium cursus eros. Aenean rutrum tincidunt arcu, a blandit est iaculis ut. Mauris vel nisi et neque pharetra efficitur. Proin vitae odio vulputate purus tincidunt tincidunt. Duis ullamcorper est et volutpat tincidunt. Nam malesuada elit id porta bibendum. Etiam efficitur magna odio, eget tempus dolor tempor non. In nec mauris vitae sem commodo laoreet nec id urna. Cras dictum convallis neque, eu finibus orci interdum et. Morbi id diam odio. Fusce non magna vitae lorem imperdiet ornare congue et erat. Nulla ornare, nisl at lacinia cursus, ipsum tortor efficitur lectus, et dictum nibh orci sit amet metus. Aliquam malesuada nisl vitae nisi aliquam, non lacinia mi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet odio egestas, posuere sapien at, aliquet metus. Cras egestas est quis ultricies auctor. Mauris quam leo, vestibulum vel felis ac, pretium ullamcorper ante. Proin ac neque vitae justo scelerisque pulvinar. Etiam malesuada nisl magna, sit amet eleifend magna posuere a. Vivamus non tempor diam. Nunc commodo facilisis massa, quis commodo sapien tincidunt a. In at sapien malesuada libero accumsan aliquam. Morbi dignissim aliquam varius. Fusce vitae blandit quam, at auctor lectus. Sed dignissim nulla quam, at iaculis quam porta vitae. Praesent finibus a mi ultrices dictum. Vivamus ut pharetra ex, eu porttitor metus. Sed molestie justo lectus, vel luctus ligula vestibulum ut. Donec velit ex, interdum vehicula tincidunt non, malesuada in nunc. Nulla aliquet, lectus sit amet tristique tincidunt, velit nunc feugiat sapien, non viverra ligula urna a elit. Etiam pulvinar lacus a mi rhoncus, eu semper magna hendrerit. Suspendisse iaculis mauris vel sagittis semper.  Integer elementum posuere ipsum, quis faucibus nulla. Suspendisse finibus, nibh et gravida elementum, est justo dapibus libero, ac euismod dolor tortor vitae purus. Aenean in purus sed lorem venenatis ullamcorper. Donec tincidunt, justo elementum vulputate faucibus, arcu enim finibus lacus, id pretium ex mauris vel lorem. Ut pretium turpis elit, vitae faucibus nulla tincidunt a. Vivamus feugiat dolor nec purus suscipit bibendum. Maecenas quis rutrum mi. Quisque sollicitudin id ante a faucibus. Ut fringilla tempus sem vel semper. Suspendisse ipsum odio, ultrices sed est ac, imperdiet rutrum massa. Vivamus sed facilisis neque. Praesent non lorem sit amet dui ullamcorper consequat sed ut diam. Sed eget sollicitudin erat. Nunc laoreet orci venenatis venenatis tempus. Nam pellentesque interdum ipsum, non viverra mi blandit non. Praesent at congue ex, in venenatis augue. Quisque pulvinar vehicula dui, vel tristique eros efficitur sit amet. Nunc non posuere augue.",
          score: 94,
        },
        {
          model: "GPT-o3",
          response: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
          score: 91,
        },
        {
          model: "Contextual-SQL",
          response: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
          score: 85,
        },
        {
          model: "XiYan-SQL",
          response: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
          score: 82,
        },
      ],
    },
    {
      prompt: "Which state do most of my customers live?",
      responses: [
        {
          model: "Llama4",
          response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet odio egestas, posuere sapien at, aliquet metus. Cras egestas est quis ultricies auctor. Mauris quam leo, vestibulum vel felis ac, pretium ullamcorper ante. Proin ac neque vitae justo scelerisque pulvinar. Etiam malesuada nisl magna, sit amet eleifend magna posuere a. Vivamus non tempor diam. Nunc commodo facilisis massa, quis commodo sapien tincidunt a. In at sapien malesuada libero accumsan aliquam. Morbi dignissim aliquam varius. Fusce vitae blandit quam, at auctor lectus. Sed dignissim nulla quam, at iaculis quam porta vitae. Praesent finibus a mi ultrices dictum. Vivamus ut pharetra ex, eu porttitor metus. Sed molestie justo lectus, vel luctus ligula vestibulum ut. Donec velit ex, interdum vehicula tincidunt non, malesuada in nunc. Nulla aliquet, lectus sit amet tristique tincidunt, velit nunc feugiat sapien, non viverra ligula urna a elit. Etiam pulvinar lacus a mi rhoncus, eu semper magna hendrerit. Suspendisse iaculis mauris vel sagittis semper.  Integer elementum posuere ipsum, quis faucibus nulla. Suspendisse finibus, nibh et gravida elementum, est justo dapibus libero, ac euismod dolor tortor vitae purus. Aenean in purus sed lorem venenatis ullamcorper. Donec tincidunt, justo elementum vulputate faucibus, arcu enim finibus lacus, id pretium ex mauris vel lorem. Ut pretium turpis elit, vitae faucibus nulla tincidunt a. Vivamus feugiat dolor nec purus suscipit bibendum. Maecenas quis rutrum mi. Quisque sollicitudin id ante a faucibus. Ut fringilla tempus sem vel semper. Suspendisse ipsum odio, ultrices sed est ac, imperdiet rutrum massa. Vivamus sed facilisis neque. Praesent non lorem sit amet dui ullamcorper consequat sed ut diam. Sed eget sollicitudin erat. Nunc laoreet orci venenatis venenatis tempus. Nam pellentesque interdum ipsum, non viverra mi blandit non. Praesent at congue ex, in venenatis augue. Quisque pulvinar vehicula dui, vel tristique eros efficitur sit amet. Nunc non posuere augue. Praesent nisl erat, finibus eu molestie sit amet, bibendum vitae lacus. Aliquam suscipit, sapien a aliquam blandit, urna nunc ullamcorper sem, vel luctus purus ex eu augue. Sed tempus vehicula tortor nec congue. Etiam sit amet rutrum felis. Nulla urna velit, interdum bibendum mauris eu, pretium cursus eros. Aenean rutrum tincidunt arcu, a blandit est iaculis ut. Mauris vel nisi et neque pharetra efficitur. Proin vitae odio vulputate purus tincidunt tincidunt. Duis ullamcorper est et volutpat tincidunt. Nam malesuada elit id porta bibendum. Etiam efficitur magna odio, eget tempus dolor tempor non. In nec mauris vitae sem commodo laoreet nec id urna. Cras dictum convallis neque, eu finibus orci interdum et. Morbi id diam odio. Fusce non magna vitae lorem imperdiet ornare congue et erat. Nulla ornare, nisl at lacinia cursus, ipsum tortor efficitur lectus, et dictum nibh orci sit amet metus. Aliquam malesuada nisl vitae nisi aliquam, non lacinia mi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet odio egestas, posuere sapien at, aliquet metus. Cras egestas est quis ultricies auctor. Mauris quam leo, vestibulum vel felis ac, pretium ullamcorper ante. Proin ac neque vitae justo scelerisque pulvinar. Etiam malesuada nisl magna, sit amet eleifend magna posuere a. Vivamus non tempor diam. Nunc commodo facilisis massa, quis commodo sapien tincidunt a. In at sapien malesuada libero accumsan aliquam. Morbi dignissim aliquam varius. Fusce vitae blandit quam, at auctor lectus. Sed dignissim nulla quam, at iaculis quam porta vitae. Praesent finibus a mi ultrices dictum. Vivamus ut pharetra ex, eu porttitor metus. Sed molestie justo lectus, vel luctus ligula vestibulum ut. Donec velit ex, interdum vehicula tincidunt non, malesuada in nunc. Nulla aliquet, lectus sit amet tristique tincidunt, velit nunc feugiat sapien, non viverra ligula urna a elit. Etiam pulvinar lacus a mi rhoncus, eu semper magna hendrerit. Suspendisse iaculis mauris vel sagittis semper.  Integer elementum posuere ipsum, quis faucibus nulla. Suspendisse finibus, nibh et gravida elementum, est justo dapibus libero, ac euismod dolor tortor vitae purus. Aenean in purus sed lorem venenatis ullamcorper. Donec tincidunt, justo elementum vulputate faucibus, arcu enim finibus lacus, id pretium ex mauris vel lorem. Ut pretium turpis elit, vitae faucibus nulla tincidunt a. Vivamus feugiat dolor nec purus suscipit bibendum. Maecenas quis rutrum mi. Quisque sollicitudin id ante a faucibus. Ut fringilla tempus sem vel semper. Suspendisse ipsum odio, ultrices sed est ac, imperdiet rutrum massa. Vivamus sed facilisis neque. Praesent non lorem sit amet dui ullamcorper consequat sed ut diam. Sed eget sollicitudin erat. Nunc laoreet orci venenatis venenatis tempus. Nam pellentesque interdum ipsum, non viverra mi blandit non. Praesent at congue ex, in venenatis augue. Quisque pulvinar vehicula dui, vel tristique eros efficitur sit amet. Nunc non posuere augue.",
          score: 89,
        },
        {
          model: "GPT-o3",
          response: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
          score: 82,
        },
        {
          model: "Contextual-SQL",
          response: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
          score: 78,
        },
        {
          model: "XiYan-SQL",
          response: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
          score: 74,
        },
      ],
    },

  ];

  return (
    <div>
      <div className="container flex-grow mx-auto max-w-7xl px-2 pt-2 sm:px-6 sm:pt-4">
        <div id="corgi-logo">
          <Image
            src={corgiLogo}
            width={500}
            height={500}
            alt="Corgi logo"
          />
        </div>
        <div id="compareTable">
          {data.map((row, index1) => (
            <div key={"row" + index1}>
              <div className="mb-4 mt-8">
                {row.prompt}
              </div>
              <div className="border border-3 rounded-md flex flex-nowrap overflow-x-auto gap-4 p-4">
                {row.responses.map((response, index2) => (
                  <div className="flex-none w-96" key={"row" + index1 + "response" + index2}>
                    <Card className="max-h-80 overflow-y-auto">
                      <CardHeader className="justify-between">
                        <div>{response.model}</div>
                        <div>{response.score}</div>
                      </CardHeader>
                      <CardBody>
                        {response.response}
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-carnelian mt-16">
        <div className="container flex-grow mx-auto max-w-4xl py-20">
          <Card>
            <CardBody>
              <div className="whitespace-pre-wrap p-8">
              {"Hello! This is the CORGI SQL benchmark. The CORGI benchmark was made to push the boundaries of txt2sql in the generative AI era. There are a few noticeable differences between CORGI and previous txt2sql benchmarks:\n    1. x% of the questions are recommendation or prediction based natural language queries. These queries are \"soft evaluated\" with human input.\n    2. CORGIv1.0 has business domain databases and queries, designed to test domain-specific lingo.\n    3. There are many more tables and relations per database in CORGI than previous benchmarks.\n    4. There is no test split. Groups are free to experiment with zero-shot/template methods or generate train data themselves. \n    For more information, check out our paper! For citation, use: XXXXXXX. Happy CORGI-ing!"}
              </div>
            </CardBody>
          </Card>
          <div className="flex mt-8 gap-8 justify-center">
            <Button className="w-64">{"CORGI v1.0 Dev Split"}</Button>
            <Button className="w-64">{"CORGI Paper"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
